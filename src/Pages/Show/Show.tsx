import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { candidatApi } from '../../api/candidats/crud';
import Loader from '../../components/Loader/Loader';

export default function Show() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [successmessage, setSuccessMessage] = useState<string>("");

  const params = useParams();

  const [lastName, setLastName] = useState("")
      const [firstName, setFirstName] = useState("")
     
      const [nationality, setNationality] = useState("")
      const [age, setAge] = useState("")
      const [weight, setWeight] = useState("")
      const [height, setHeight] = useState("")
      const [shortDescription, setShortDescription] = useState("")
      const [fullDescription, setFullDescription] = useState("")
      const [profilePhoto, setProfilePhoto] = useState("")

  const goToBack = () => {
    navigate(-1);
  };


  useEffect(() => {
      const fetchProject = async () => {
        if (params.id) {
          try {
            setIsLoading(true);
            const data = await candidatApi.read(parseInt(params.id || "0", 10));
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setAge(data.age.toLocaleString);
            setHeight(data.height.toLocaleString);
            setWeight(data.weight.toLocaleString);
            setNationality(data.nationality);
            setShortDescription(data.shortDescription);
            setFullDescription(data.fullDescription);
            setProfilePhoto(data.profilePhoto);
            
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        }
      };
      fetchProject();
    }, [params]);
  return (
    <div>
      <button type="button" onClick={goToBack}>
        Retour
      </button>
      <h1>Détail d'un projet</h1>

      <div>
         {
          isLoading ? <Loader/> : ''
         }

         <p>
          {
            profilePhoto
          }
         </p>
        <h3> {firstName} </h3>

        <p>
          {lastName}
        </p>
        <p>
          {age}
        </p>
        <p>
          {nationality}
        </p>
        <p>
          {weight}
        </p>
        <p>
          {height}
        </p>
        <p>
          {shortDescription}
        </p>
        <p>
          {fullDescription}
        </p>

       <br />

        <i> {status} </i>
      </div>
    </div>
  );
  
}
