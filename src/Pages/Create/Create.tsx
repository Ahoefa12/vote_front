import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import SideBar from '../../components/Sidebar/SideBar'
import Button from '../../components/Button/Button'

import { Link } from 'react-router'
import { candidatApi } from '../../api/candidats/crud'

export default function Create() {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [nationality, setNationality] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [fullDescription, setFullDescription] = useState("")
    const [profilePhoto, setProfilePhoto] = useState<File | null>(null)


    const onFullLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const onFullFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const onFullNationalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNationality(event.target.value)
    }
    const onFullAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    }
    const onFullWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(event.target.value)
    }
    const onFullHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(event.target.value)
    }
    const onFullShortDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setShortDescription(event.target.value)
    }
    const onFullFullDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFullDescription(event.target.value)
    }
    const onFullProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProfilePhoto(event.target.files[0])
        }
    }




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            setSuccessMessage('')
            const formData = new FormData();
            formData.set("lastName", lastName);
            formData.set("firstName", firstName);
            formData.set("nationality", nationality);
            formData.set("age", age);
            formData.set("weight", weight);
            formData.set("height", height);
            formData.set("shortDescription", shortDescription);
            formData.set("fullDescription", fullDescription);
            if (profilePhoto) {
                formData.append("profilePhoto", profilePhoto)
            }

            console.log(formData)
            await candidatApi.create(formData);
            setSuccessMessage('Candidat crée avec succès')
            setLastName('')
            setFirstName('')
            setNationality('')
            setAge('')
            setWeight('')
            setHeight('')
            setShortDescription('')
            setFullDescription('')

        } catch (error) {

        }
        finally {
            setIsLoading(false)
        }
    };

    return (
        <div className='create'>
            <SideBar />
            <h1>
                Créer un candidat
            </h1>
            <Link to="/candidats/List" className="back-button">← Retour à l'accueil</Link>
            <div className='Container'>
                <form onSubmit={handleSubmit}>
                    {
                        successMessage
                    }
                    <Input label='LastName :' reference='lastName' type='text' placeholder='Entrez le nom du candidat' onChange={onFullLastNameChange} value={lastName} />
                    <Input label='FirstName :' reference='firstName' type='text' placeholder='Entrez le prénom du candidat' onChange={onFullFirstNameChange} value={firstName} />
                    <Input label='Nationality :' reference='nationality' type='text' placeholder='Précisez la natinalité du candidat' onChange={onFullNationalityChange} value={nationality} />
                    <Input label='Age (kg):' reference='age' type='number' placeholder="Veuillez renseigner l'âge du candidat" onChange={onFullAgeChange} value={age} />
                    <Input label='Weight (cm):' reference='weight' type='number' placeholder='Veuillez renseigner le poids du candidat' onChange={onFullWeightChange} value={weight} />
                    <Input label='Height :' reference='height' type='number' placeholder='Veuillez renseigner la taille du candidat' onChange={onFullHeightChange} value={height} />
                    <textarea name='ShortDescription :' placeholder='Donnez une briève description du candidat' onChange={onFullShortDescriptionChange} value={shortDescription} />
                    <textarea name='FullDescription :' placeholder='Donnez une description complète du candidat' onChange={onFullFullDescriptionChange} value={fullDescription} />
                    <Input
                        label='ProfilePhoto (URL):'
                        reference='profilePhoto'
                        type='file'
                        placeholder='Veuillez charger une photo'
                        onChange={onFullProfilePhotoChange}
                    />
                    <Button className='but' label='Créer' type='submit' />


                </form>
            </div>
        </div>
    )
}
