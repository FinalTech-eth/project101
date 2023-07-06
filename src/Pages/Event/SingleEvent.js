import { useState, useEffect } from 'react';
import SingleEvent from '../../Components/Events/SingleEvent'
import HeroSection from '../../Components/HeroSection/HeroSection'
import bgUrl from '../../Assets/Images/download (2).jpg'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import axios from '../../API/axios';

const SingleEventPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchEventData();
  }, []);

    const fetchEventData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/event/${id}`);
      setEventData(response.data);
      console.log(eventData)
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <HeroSection url={eventData?.image} title={eventData?.title} />
      <SingleEvent {...eventData}/>
    </div>
  )
}

export default SingleEventPage