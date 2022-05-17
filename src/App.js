import Navigation from './components/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';
import Destination from './components/destination/destination.component';
import Crew from './components/crew/crew.component';
import './components/commonStyles/commonStyles.scss';
import './App.css';
import Technology from './components/technology/technology.component';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route
						path='/destination/moon'
						element={<Destination planet={'moon'} />}
					/>
					<Route
						path='/destination/mars'
						element={<Destination planet={'mars'} />}
					/>
					<Route
						path='/destination/europa'
						element={<Destination planet={'europa'} />}
					/>
					<Route
						path='/destination/titan'
						element={<Destination planet={'titan'} />}
					/>
					<Route
						path='/crew/commander'
						element={<Crew person={'commander'} />}
					/>
					<Route
						path='/crew/missionspecialist'
						element={<Crew person={'mission specialist'} />}
					/>
					<Route path='/crew/pilot' element={<Crew person={'pilot'} />} />
					<Route
						path='/crew/flightengineer'
						element={<Crew person={'flight engineer'} />}
					/>
					<Route
						path='/technology/launchvehicle'
						element={<Technology terminology={'launch vehicle'} />}
					/>
					<Route
						path='/technology/spaceport'
						element={<Technology terminology={'spaceport'} />}
					/>
					<Route
						path='/technology/spacecapsule'
						element={<Technology terminology={'space capsule'} />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
