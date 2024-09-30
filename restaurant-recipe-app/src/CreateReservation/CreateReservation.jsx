import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './CreateReservation.css';
import MenuItem from '../MenuItem/MenuItem';

const CreateReservation = ({ user }) => {
    const [reservationData, setReservationData] = useState({
        reservation_date: '',
        details: '',
        menuItems: [],
        total_order_amount: 0 // Store total_order_amount in state
    });

    const [reservations, setReservations] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentReservationId, setCurrentReservationId] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    // Fetch reservations for the logged-in user
    const fetchReservations = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/reservations', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setReservations(response.data);
        } catch (error) {
            console.error(error);
            alert('Error fetching reservations: ' + (error.response?.data?.message || error.message));
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    const calculateTotalAmount = useCallback(() => {
        const total = reservationData.menuItems.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
        setReservationData(prevData => ({
            ...prevData,
            total_order_amount: total // Update total_order_amount in state
        }));
    }, [reservationData.menuItems]);

    useEffect(() => {
        calculateTotalAmount();
    }, [calculateTotalAmount]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservationData({ ...reservationData, [name]: value });
    };

    const handleMenuItemChange = (item, isChecked) => {
        setReservationData(prevData => {
            const updatedMenuItems = isChecked
                ? [...prevData.menuItems, item]
                : prevData.menuItems.filter(menuItem => menuItem.name !== item.name);
            return { ...prevData, menuItems: updatedMenuItems };
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const token = localStorage.getItem('token');
          const reservationPayload = { ...reservationData }; // Send the full reservation data
  
          if (editMode) {
              // Ensure the correct endpoint for updating a reservation
              await axios.put(`http://localhost:5000/api/reservations/update/${currentReservationId}`, reservationPayload, {
                  headers: { Authorization: `Bearer ${token}` }
              });
              alert('Reservation updated successfully');
          } else {
              await axios.post('http://localhost:5000/api/reservations/create', reservationPayload, {
                  headers: { Authorization: `Bearer ${token}` }
              });
              alert('Reservation created successfully');
          }
          resetForm();
          fetchReservations();
      } catch (error) {
          console.error(error);
          alert('Error creating/updating reservation: ' + (error.response?.data?.message || error.message));
      }
  };
  

    const resetForm = () => {
        setReservationData({ reservation_date: '', details: '', menuItems: [], total_order_amount: 0 });
        setEditMode(false);
        setCurrentReservationId(null);
        setTotalAmount(0);
    };

    const handleEdit = (reservation) => {
        setReservationData({
            reservation_date: reservation.reservation_date,
            details: reservation.details,
            menuItems: reservation.menuItems || [],
            total_order_amount: reservation.total_order_amount || 0
        });
        setCurrentReservationId(reservation.id);
        setEditMode(true);
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/reservations/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setReservations(reservations.filter(reservation => reservation.id !== id));
            alert('Reservation deleted successfully');
        } catch (error) {
            console.error(error);
            alert('Error deleting reservation: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="reservation-container">
            <h1 className="header">{editMode ? 'Edit Reservation' : 'Create Reservation'}</h1>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <input 
                    className="input-date" 
                    type="date" 
                    name="reservation_date" 
                    value={reservationData.reservation_date} 
                    onChange={handleInputChange} 
                    required 
                />
                <textarea 
                    className="input-details" 
                    name="details" 
                    value={reservationData.details} 
                    onChange={handleInputChange} 
                    placeholder="Details" 
                    required 
                />
                
                {/* Menu Item Selection */}
                <div className="menu-item-selection">
                    <h2>Select Menu Items:</h2>
                    <MenuItem handleMenuItemChange={handleMenuItemChange} />
                </div>
                
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>

                <div className="button-container">
                    <button className="button submit-button" type="submit">
                        {editMode ? 'Update Reservation' : 'Create Reservation'}
                    </button>
                    <button className="button cancel-button" type="button" onClick={resetForm}>
                        Cancel
                    </button>
                </div>
            </form>

            <h2 className="reservations-header">Your Reservations</h2>
            <ul className="reservations-list">
                {reservations.map(reservation => (
                    <li className="reservation-item" key={reservation.id}>
                        <h3>{reservation.reservation_date}</h3>
                        <p>{reservation.details}</p>
                        <p>Total Amount: ${reservation.total_order_amount.toFixed(2)}</p>
                        <button className="edit-button" onClick={() => handleEdit(reservation)}>Edit</button>
                        <button className="delete-button" onClick={() => handleDelete(reservation.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreateReservation;
