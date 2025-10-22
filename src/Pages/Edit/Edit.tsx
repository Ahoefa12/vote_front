import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import Input from "../../components/Input/Input";
import { candidatApi } from "../../api/candidats/crud";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import SideBar from "../../components/Sidebar/SideBar";


export default function Edit() {
  const navigate = useNavigate();
  const params = useParams();


  const goToBack = () => {
    navigate(-1);
  };

  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  
  const OnFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
  const OnLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);
  const OnNationalityChange = (e: React.ChangeEvent<HTMLInputElement>) => setNationality(e.target.value);
  const OnAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value));
  const OnWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value));
  const OnHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value));
  const OnShortDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setShortDescription(e.target.value);
  const OnFullDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setFullDescription(e.target.value);
  const OnProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => setProfilePhoto(e.target.value);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setSuccessMessage("");

      const formData = new FormData();
      formData.set("firstName", firstName);
      formData.set("lastName", lastName);
      formData.set("nationality", nationality);
      formData.set("age", age.toString());
      formData.set("weight", weight.toString());
      formData.set("height", height.toString());
      formData.set("shortDescription", shortDescription);
      formData.set("fullDescription", fullDescription);
      formData.set("profilePhoto", profilePhoto);

      await candidatApi.update(parseInt(params.id || "0", 10), formData);

      setSuccessMessage("Candidat mis à jour avec succès !");
    } catch (error) {
      console.log("Erreur lors de la mise à jour :", error);
      setSuccessMessage("Erreur lors de la mise à jour du candidat.");
    } finally {
      setIsLoading(false);
    }
  };

  // 🔍 Charger le candidat au montage du composant
  useEffect(() => {
    const fetchCandidat = async () => {
      if (params.id) {
        try {
          setIsLoading(true);
          const data = await candidatApi.read(parseInt(params.id || "0", 10));

          setFirstName(data.firstName || "");
          setLastName(data.lastName || "");
          setNationality(data.nationality || "");
          setAge(data.age || 0);
          setWeight(data.weight || 0);
          setHeight(data.height || 0);
          setShortDescription(data.shortDescription || "");
          setFullDescription(data.fullDescription || "");
          setProfilePhoto(data.profilePhoto || "");
        } catch (error) {
          console.log("Erreur de chargement :", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchCandidat();
  }, [params]);

  return (
    <div className='create'>
        <SideBar />
      <h1>Modifier un candidat</h1>

      {successMessage && <p>{successMessage}</p>}

        <div className="Container">

        <form onSubmit={handleSubmit}>
            <Input label="LastName :" reference="firstName" type="text" placeholder="Entrez le nom du candidat" onChange={OnFirstNameChange} value={firstName} />
            <Input label="FirstName :" reference="lastName" type="text" placeholder="Entrez le prénom du candidat" onChange={OnLastNameChange} value={lastName} />
            <Input label="Nationality :" reference="nationality" type="text" placeholder="Précisez la natinalité du candidat" onChange={OnNationalityChange} value={nationality} />
            <Input label="Age :" reference="age" type="number" placeholder="Veuillez renseigner l'âge du candidat" onChange={OnAgeChange} value={age.toString()} />
            <Input label="Weight (kg)" reference="weight" type="number" placeholder="Veuillez renseigner le poids du candidat" onChange={OnWeightChange} value={weight.toString()} />
            <Input label="Height (cm):" reference="height" type="number" placeholder="Veuillez renseigner la taille du candidat" onChange={OnHeightChange} value={height.toString()} />
            <textarea name="ShortDescription :" value={shortDescription} onChange={OnShortDescriptionChange} placeholder="Donnez une briève description du candidat" />
            <textarea name="FullDescription :" value={fullDescription} onChange={OnFullDescriptionChange} placeholder="Donnez une description complète du candidat" />
            <Input label="ProfilePhoto (URL):" reference="profilePhoto" type="file" placeholder="Veuillez charger une photo" onChange={OnProfilePhotoChange} value={profilePhoto} />

            <Button label='Mettre à jour' type='submit' />
            <Link to="/" className="back-button">← Retour à l'accueil</Link>
        </form>
        </div>
    </div>
  );
}
