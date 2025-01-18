import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeContact, resetContacts } from '../../redux/slices/slice'
import "./Home.scss"

export default function Home() {
    const contacts = useSelector((state) => state.contact.contacts)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <>
            <div className='d-flex justify-content-end m-3 p-2'>
                <button type='button' className='btn btn-outline-success col-2' onClick={() => navigate('add-entries')}>Add</button>
            </div>

            <div className='list-card card bg-primary-subtle m-3 p-2'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h4 className='text-info-emphasis m-0'>Students list:</h4>
                    <button type="button" className='btn btn-danger' onClick={() => dispatch(resetContacts())}>
                        Reset All Entries
                    </button>
                </div>
                <table className='table table-primary m-0'>
                    <thead>
                        <tr>
                            <th className='text-primary-emphasis'>Name</th>
                            <th className='text-primary-emphasis'>Email</th>
                            <th className='text-primary-emphasis'>Number</th>
                            <th className='text-primary-emphasis'>DOB</th>
                            <th className='text-primary-emphasis'>Gender</th>
                            <th className='text-primary-emphasis'>Course</th>
                            <th className='text-primary-emphasis'></th>
                            <th className='text-primary-emphasis'></th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {contacts.length > 0 && contacts?.map((contact, index) => (
                            <tr key={index} className='table-row table-primary'>
                                <td className='col-2'>{contact?.Name}</td>
                                <td className='col-2'>{contact?.Email}</td>
                                <td className='col-2'>{contact?.Contact}</td>
                                <td className='col-2'>{contact?.DOB}</td>
                                <td className='col-1'>{contact?.Gender}</td>
                                <td className='col-1'>{contact?.Course}</td>
                                <td className='col-1'>
                                    <button type='button' className='btn btn-primary-w' onClick={() => navigate('update-entries', { state: { index } })}>
                                        <i className="fa-solid fa-pencil" />
                                    </button>
                                </td>
                                <td className='col-1'>
                                    <button type='button' className='btn btn-primary-w' onClick={() => dispatch(removeContact(index))}>
                                        <i className="fa-solid fa-trash-can" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
