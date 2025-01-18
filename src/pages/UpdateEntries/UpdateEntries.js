import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateContact } from '../../redux/slices/slice'
import moment from 'moment'
import toast from 'react-hot-toast'

export default function UpdateEntries() {
    const contacts = useSelector((state) => state.contact.contacts)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputNumber, setInputNumber] = useState(0)
    const [inputDOB, setInputDOB] = useState(moment().format("YYYY-MM-DD"))
    const [inputGender, setInputGender] = useState("")
    const [inputCourse, setInputCourse] = useState("")

    const handleUpdate = () => {
        if (inputName && inputEmail && (inputNumber.length === 10) && inputDOB && inputGender && inputCourse) {
            const index = location.state?.index
            dispatch(updateContact({ index, updatedContact: { Name: inputName, Email: inputEmail, Contact: inputNumber, DOB: inputDOB, Gender: inputGender, Course: inputCourse } }))
            navigate('/')
        } else if (inputName === "") {
            toast.error("Please enter name!")
        } else if (inputEmail === "") {
            toast.error("Please enter email!")
        } else if (inputNumber.length !== 10) {
            toast.error("Please enter valid number!")
        } else if (inputDOB === "") {
            toast.error("Please enter DOB!")
        } else if (inputGender === "") {
            toast.error("Please enter gender!")
        } else {
            toast.error("Please enter course!")
        }
    }

    useEffect(() => {
        const index = location.state?.index
        setInputName(contacts[index].Name)
        setInputEmail(contacts[index].Email)
        setInputNumber(contacts[index].Contact)
        setInputDOB(contacts[index].DOB)
        setInputGender(contacts[index].Gender)
        setInputCourse(contacts[index].Course)
    }, [contacts, location.state])

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='card m-3 p-2 col-6'>
                    <form>
                        <div className='mb-2'>
                            <label className="fw-medium">Name:</label>
                            <input
                                type="text"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className='mb-2'>
                            <label className="fw-medium">Email:</label>
                            <input
                                type="email"
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className='mb-2'>
                            <label className="fw-medium">Number:</label>
                            <input
                                type="number"
                                value={inputNumber}
                                onChange={(e) => setInputNumber(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className='mb-2'>
                            <label className="fw-medium">DOB:</label>
                            <input
                                type="date"
                                value={inputDOB}
                                onChange={(e) => setInputDOB(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className='mb-2 d-flex gap-3'>
                            <label className="fw-medium">Gender:</label>
                            <div className='d-flex gap-2'>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="male"
                                        checked={inputGender === "male"}
                                        onClick={() => setInputGender("male")}
                                    />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="female"
                                        checked={inputGender === "female"}
                                        onClick={() => setInputGender("female")}
                                    />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <label className="fw-medium">Course:</label>
                            <input
                                type="text"
                                value={inputCourse}
                                onChange={(e) => setInputCourse(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className='mb-2'>
                            <button type='button' className='btn btn-success col-12' onClick={() => handleUpdate()}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
