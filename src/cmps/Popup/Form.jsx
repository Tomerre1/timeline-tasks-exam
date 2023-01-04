import React, { useState } from 'react';
import Input from '../../cmps/controls/Input';
import Button from '../../cmps/controls/Button';
import { utilService } from '../../services/util.service';
import Swal from 'sweetalert2';
import useLocalStorage from '../../hooks/useLocalStorage';
import { addTask, closePopup } from '../../store/system.actions';
import { useDispatch } from 'react-redux';
const Form = ({ allTasks }) => {
  const [formData, setFormData] = useState({
    nameOfEvent: '',
    startDate: '',
    endDate: '',
  });
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const dispatch = useDispatch();

  const handleOnChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const validate = (endDate, startDate) => {
    const myEvent = {
      nameOfEvent: formData.nameOfEvent,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
    };

    const isExist = allTasks.some(
      (task) =>
        task.startDate === myEvent.startDate && task.endDate === myEvent.endDate
    );

    if (isExist) {
      failPopup('Failed to save event', 'Your task already exists', 'fail');
      return;
    }

    if (endDate.getTime() > startDate.getTime()) {
      dispatch(addTask(myEvent));
      setTasks([...tasks, myEvent]);
      dispatch(closePopup());
    } else {
      failPopup(
        'Failed to save event',
        'Your start date have to be bigger than end date',
        'fail'
      );
    }
  };

  const failPopup = async (title, text, icon) => {
    await Swal.fire({
      title,
      text,
      icon,
      timer: 3000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = utilService.createDate(formData.startDate, failPopup);
    const endDate = utilService.createDate(formData.endDate, failPopup);
    endDate && startDate && validate(endDate, startDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name='nameOfEvent'
        label='Name of event'
        onChange={handleOnChange}
        value={formData.nameOfEvent}
        placeholder='Name of the event'
      />
      <Input
        name='startDate'
        label='Start Date'
        onChange={handleOnChange}
        value={formData.startDate}
        placeholder='DD/MM/YYYY,hh:mm'
      />
      <Input
        name='endDate'
        label='End Date'
        onChange={handleOnChange}
        value={formData.endDate}
        type='text'
        placeholder='DD/MM/YYYY,hh:mm'
      />

      <Button
        type='submit'
        disabled={
          !(formData.endDate && formData.startDate && formData.nameOfEvent)
        }
        text='Create Event'
      />
    </form>
  );
};

export default Form;
