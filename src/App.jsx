import { v4 as uuidv4 } from 'uuid';
import JobCard from './components/molecules/JobCard';
import DefaultLayout from './components/templates/DefaultLayout';
import dataCards from './db/data.json';

function App() {
  const data = dataCards
  return (
    <>
      <DefaultLayout>
        { data.map( data => {
          
          const { company, logo, new: newPill, featured, position, postedAt, contract, location, languages, tools } = data;
          
          return (
            <JobCard 
                company = { company }
                logo = { logo }
                newPill = { newPill }
                featured = { featured }
                position = { position }
                postedAt = { postedAt }
                contract = { contract }
                location = { location }
                languages = { languages }
                tools = { tools }
                key = { uuidv4() }
            />
          )
          
        })}
      </DefaultLayout>
    </>
  )
}

export default App
