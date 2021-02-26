import Green from "./ljtech-g.svg";
import Docs from "./components/Docs";
import { useEffect, useState } from "react";

function App() {
	const [dilutionFactor, setDilutionFactor] = useState("0L/units");
	const [dilutionFactorNumber, setDilutionFactorNumber] = useState(0);
	const [herbicideRequired, setHerbicideRequired] = useState("0L/units");
	const [capacity, setCapacity] = useState(1);
	const [herbicide, setHerbicide] = useState(1);
	const [water, setWater] = useState(1);
	const [volumeTotal, setVolumeTotal] = useState(0);

	useEffect(() => {
		if (herbicide >= 1 || water >= 1) {
			setVolumeTotal(Number(herbicide) + Number(water));
			setDilutionFactor(`${herbicide} / ${volumeTotal} L`);
			setDilutionFactorNumber(Number(herbicide) / Number(volumeTotal));
		}
		if (herbicide >= 1 || water >= 1 || capacity >= 1) {
			setHerbicideRequired(Number(capacity) * Number(dilutionFactorNumber));
		}
	});

	console.log(dilutionFactor);

	return (
		<div className="min-h-screen grid">
			<div className="min-h-screen flex content-center items-center justify-center px-2">
				<div>
					<fieldset>
						<legend className="text-center text-xl font-black py-4">
							Herbicide Dilution Calculator
						</legend>
						<div className="flex flex-wrap content-center items-center justify-around">
							<div className="border rounded-sm p-2 m-2 md:mx-8">
								<div className="py-3">
									<label htmlFor="dilutionFactor">
										<span className="block px-2 font-bold">
											Your Dilution Factor is:
										</span>
										<input
											type="text"
											placeholder={dilutionFactor}
											readonly="readonly"
											className="px-2 py-1 w-full"
										/>
									</label>
								</div>
								<div className="py-3">
									<label htmlFor="herbicideRequired">
										<span className="block px-2 font-bold">You need add:</span>
										<input
											type="text"
											placeholder={`${herbicideRequired}L`}
											readonly="readonly"
											className="px-2 py-1 w-full"
										/>
										<span className="block px-2 font-bold">
											more herbicide to your {capacity}L equipment
										</span>
									</label>
								</div>
							</div>
							<div className="m-2 md:mx-8">
								<div className="py-3">
									<label htmlFor="capacity">
										<em className="block px-2">Equipment Capacity(L)</em>
										<input
											name="capacity"
											id="capacity"
											type="number"
											className="text-yellow-500 font-semibold px-2 py-1 w-full"
											min="1"
											placeholder={capacity}
											max="1000"
											onChange={(e) => setCapacity(e.target.value)}
										/>
										<small className="block px-2 text-gray-400">
											Current: {capacity}L
										</small>
									</label>
								</div>
								<div className="py-3">
									<label htmlFor="herbicide">
										<em className="block px-2">Herbicide per unit of area*</em>
										<input
											name="herbicide"
											id="herbicide"
											type="number"
											className="text-yellow-500 font-semibold px-2 py-1 w-full"
											min="1"
											placeholder={herbicide}
											max="500"
											onChange={(e) => setHerbicide(e.target.value)}
										/>
										<small className="block px-2 text-gray-400">
											Current: {herbicide}L/ha
										</small>
									</label>
								</div>
								<div className="py-3">
									<label htmlFor="water">
										<em className="block px-2">Water per unit of area*</em>
										<input
											name="water"
											id="water"
											type="number"
											className="text-yellow-500 font-semibold px-2 py-1 w-full"
											min="1"
											placeholder={water}
											max="500"
											onChange={(e) => setWater(e.target.value)}
										/>
										<small className="block px-2 text-gray-400">
											Current: {water}L/ha
										</small>
									</label>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
			<div className="bg-gray-100 min-h-screen flex content-center items-center justify-center">
				<Docs />
			</div>
			<footer className="bg-gray-200 p-3 flex flex-wrap content-center items-center justify-center">
				<h1 className="font-bold mx-2">find more projects @</h1>
				<a
					href="https://ljtech.ca"
					target="_blank"
					className="flex content-center items-center justify-center transition hover:opacity-80"
				>
					<div>
						<img src={Green} alt="logo" width="20" />
					</div>
					<h1 className="text-blue-5`00 font-bold ml-1 mr-2">ljtech.ca</h1>
				</a>
			</footer>
		</div>
	);
}

export default App;
