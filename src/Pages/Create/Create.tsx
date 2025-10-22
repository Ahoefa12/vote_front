import React, { useState } from 'react'
import Input from '../../components/Input/Input'

export default function Create() {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [nationality, setNationality] = useState("")
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [fullDescription, setFullDescription] = useState("")
    const [profilePhoto, setProfilePhoto] = useState("")

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
    const onFullShortDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShortDescription(event.target.value)
    }
    const onFullFullDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullDescription(event.target.value)
    }
    const onFullProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfilePhoto(event.target.value)
    }



    return (
        <div>
            <h1>
                Créer un candidat
            </h1>
            <div className='Container'>
                <form >
                    <Input label='lastName' reference='lastName' type='lastName' placeholder='Entrez le nom du candidat' onChange={onFullLastNameChange} value={lastName} />
                    <Input label='firstName' reference='firstName' type='firstName' placeholder='Entrez le nom du candidat' onChange={onFullFirstNameChange} value={firstName} />
                    <Input label='nationality' reference='nationality' type='nationality' placeholder='Entrez le nom du candidat' onChange={onFullNationalityChange} value={nationality} />
                    <Input label='age' reference='age' type='age' placeholder='Entrez le nom du candidat' onChange={onFullAgeChange} value={age} />
                    <Input label='weight' reference='weight' type='weight' placeholder='Entrez le nom du candidat' onChange={onFullWeightChange} value={weight} />
                    <Input label='height' reference='height' type='height' placeholder='Entrez le nom du candidat' onChange={onFullHeightChange} value={height} />
                    <Input label='shortDescription' reference='shortDescription' type='shortDescription' placeholder='Entrez le nom du candidat' onChange={onFullShortDescriptionChange} value={shortDescription} />
                    <Input label='fullDescription' reference='fullDescription' type='fullDescription' placeholder='Entrez le nom du candidat' onChange={onFullFullDescriptionChange} value={fullDescription} />
                    <Input label='profilePhoto' reference='profilePhoto' type='profilePhoto' placeholder='Entrez le nom du candidat' onChange={onFullProfilePhotoChange} value={profilePhoto} />
                    <button type="submit">Créer</button>

                </form>
            </div>
        </div>
    )
}
