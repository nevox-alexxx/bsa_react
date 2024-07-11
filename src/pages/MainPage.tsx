import { MainHeader } from '../components/MainHeader'; 
import { TripCards } from '../components/TripCards';
import { Filters } from '../components/Filters';


export function MainPage() {
  return (
    <>
      <MainHeader />
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        < Filters />
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <TripCards />
        </section>
      </main>
    </>
  )
}