import { v4 as uuidv4 } from 'uuid';

import Image from '../../atoms/Image/Image';
import TextSecondary from '../../atoms/TextSecondary/TextSecondary';
import TextPrimary from '../../atoms/TextPrimary/TextPrimary';
import Text from '../../atoms/Text/Text';
import Pill from '../../atoms/Pill/Pill';
import Tags from '../../atoms/Tags/Tags';

import '../../../App.css';


const JobCard = ({ company, logo, newPill, featured, position, postedAt, contract, location, languages, tools }) => {
  return (
    <div className="job-card">
      <div className="job-description" >
        <div className='image'>
          <Image logo = { logo } description = { `logo ${ company }` }/>
        </div>
        <div className='description'>
          <div className='description-wrapper'>
            <TextSecondary text = { company } />
            { ( newPill ) && <Pill text = { 'New!' }/>}
            { ( featured ) && <Pill text = { 'featured' }/>}
          </div>
          <div className='position'>
            <TextPrimary text = { position }/>
          </div>
          <div className='publising'>
            { postedAt && <Text text = { postedAt }/>}
            { contract && <Text text = { contract }/>}
            { location && <Text text = { location }/>}
          </div>
        </div>
      </div>
      <div className="tag-wrapper">
        { languages && languages.map( language => <Tags tag = { language } key = { uuidv4() }/>) }
        { tools && tools.map( tool => <Tags tag = { tool } key = { uuidv4() }/>) }
      </div>
    </div>
  )
}

export default JobCard;