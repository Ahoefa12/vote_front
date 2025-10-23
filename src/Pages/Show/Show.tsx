import { Link, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { candidatApi } from '../../api/candidats/crud';
import Loader from '../../components/Loader/Loader';
import SideBar from '../../components/Sidebar/SideBar';


export default function Show() {
    const navigate = useNavigate();
    const params = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [candidat, setCandidat] = useState<any>(null);

    useEffect(() => {
        const fetchCandidat = async () => {
            if (params.id) {
                try {
                    setIsLoading(true);
                    const data = await candidatApi.read(parseInt(params.id, 10));
                    setCandidat(data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchCandidat();
    }, [params]);

    return (
        <div>
            <SideBar />
            <h1>Détails du candidat</h1>
            <Link to="/" className="back-button">← Retour à l'accueil</Link>

            <div className="Container">
                {isLoading ? (
                    <Loader />
                ) : candidat ? (
                    <div className="candidat-card">
                        <img
                            src={`http://192.168.0.184/storage/candidats_images/${candidat.profilePhoto}`}
                            alt={`${candidat.firstName} ${candidat.lastName}`}
                            className="profile-photo"
                        />

                        <h2>{candidat.firstName} {candidat.lastName}</h2>
                        <p><strong>Âge :</strong> {candidat.age}</p>
                        <p><strong>Nationalité :</strong> {candidat.nationality}</p>
                        <p><strong>Poids :</strong> {candidat.weight} kg</p>
                        <p><strong>Taille :</strong> {candidat.height} cm</p>
                        <p><strong>Description courte :</strong> {candidat.shortDescription}</p>
                        <p><strong>Description complète :</strong> {candidat.fullDescription}</p>
                    </div>
                ) : (
                    <p>Aucun candidat trouvé.</p>
                )}
            </div>
        </div>
    );
}
