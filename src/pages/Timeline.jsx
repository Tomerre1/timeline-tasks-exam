import React, { useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Swal from 'sweetalert2';
import StarIcon from '@material-ui/icons/Star';
import { useSelector, useDispatch } from 'react-redux';
import { CmpHeader } from '../cmps/Header/CmpHeader';
import { openPopup } from '../store/system.actions';
import { Popup } from '../cmps/Popup/Popup';
import 'react-vertical-timeline-component/style.min.css';
import Form from '../cmps/Popup/Form';
import AddIcon from '@mui/icons-material/Add';
import { utilService } from '../services/util.service';
import Select from 'react-select';
import { setTasks } from '../store/system.actions';

export function Timeline() {
  const tasks = useSelector((state) => state.systemReducer.tasks);
  const dispatch = useDispatch();
  const options = [
    { value: 'Select sort option', label: 'Select sort option' },
    { value: 'name', label: 'Sort by name' },
    { value: 'startDate', label: 'Sort by start date' },
    { value: 'endDate', label: 'Sort by end date' },
  ];

  useEffect(() => {
    fireSuccessEvent();
  }, []);

  const onChangeSortOption = ({ value }) => {
    switch (value) {
      case 'name':
        dispatch(setTasks(utilService.sortByName(tasks)));
        break;
      case 'startDate':
        dispatch(setTasks(utilService.sortByDate(tasks, value)));
        break;
      case 'endDate':
        dispatch(setTasks(utilService.sortByDate(tasks, value)));
        break;
      default:
        break;
    }
  };

  const fireSuccessEvent = async () => {
    await Swal.fire({
      title: 'Welcome',
      text: 'Your tasks for today is loaded successfully',
      icon: 'success',
      timer: 2500,
    });
  };

  return (
    <>
      <CmpHeader title='My Tasks' />
      <div className='time-line-container'>
        <Select
          className='basic-single'
          classNamePrefix='select'
          defaultValue={options[0]}
          name='color'
          options={options}
          onChange={onChangeSortOption}
        />
        <VerticalTimeline>
          {tasks.map((task, idx) => (
            <VerticalTimelineElement
              key={task.endDate + task.startDate}
              date={utilService.formatDate(task.startDate)}
              contentStyle={{
                background: 'rgba(42, 42, 42, 0.5)',
                color: '#fff',
              }}
              icon={<StarIcon />}
              iconStyle={{ background: 'rgb(255, 117, 24)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgba(42, 42, 42, 0.5)',
              }}
            >
              <h4 className='vertical-timeline-element-subtitle'>
                {task.nameOfEvent}
              </h4>
              <p>End Date: {utilService.formatDate(task.endDate)}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <button className='float' onClick={() => dispatch(openPopup())}>
        <AddIcon />
      </button>
      <Popup title='New Event'>
        <Form allTasks={tasks} />
      </Popup>
    </>
  );
}
