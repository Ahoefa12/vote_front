import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { candidatApi } from "../../api/candidats/crud.";
import Loader from "../../components/Loader/Loader";


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
    <div>
      <h1>Modifier un candidat</h1>
      <button type="button" onClick={goToBack}>
        Retour
      </button>

      {successMessage && <p>{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <Input label="Prénom" reference="firstName" type="text" placeholder="Saisir le prénom" onChange={OnFirstNameChange} value={firstName} />
        <Input label="Nom" reference="lastName" type="text" placeholder="Saisir le nom" onChange={OnLastNameChange} value={lastName} />
        <Input label="Nationalité" reference="nationality" type="text" placeholder="Saisir la nationalité" onChange={OnNationalityChange} value={nationality} />
        <Input label="Âge" reference="age" type="number" placeholder="Saisir l'âge" onChange={OnAgeChange} value={age.toString()} />
        <Input label="Poids (kg)" reference="weight" type="number" placeholder="Saisir le poids" onChange={OnWeightChange} value={weight.toString()} />
        <Input label="Taille (cm)" reference="height" type="number" placeholder="Saisir la taille" onChange={OnHeightChange} value={height.toString()} />
        <textarea name="shortDescription" value={shortDescription} onChange={OnShortDescriptionChange} placeholder="Brève description" />
        <textarea name="fullDescription" value={fullDescription} onChange={OnFullDescriptionChange} placeholder="Description complète" />
        <Input label="Photo de profil (URL)" reference="profilePhoto" type="text" placeholder="Lien de la photo" onChange={OnProfilePhotoChange} value={profilePhoto} />

        <button type="submit" disabled={isLoading} style={{ width: "150px", marginTop: "10px" }}>
          {isLoading ? (
            <div style={{ width: "50px" }}>
              <Loader />
            </div>
          ) : (
            <p>Mettre à jour</p>
          )}
        </button>
      </form>
    </div>
  );
}
