import Green from "./ljtech-g.svg";
import { useEffect, useState } from "react";

export default function App() {
	const [dilutionFactor, setDilutionFactor] = useState("0/0 L");
	const [dilutionFactorNumber, setDilutionFactorNumber] = useState(0);
	const [herbicideRequired, setHerbicideRequired] = useState(0);
	const [capacity, setCapacity] = useState(0);
	const [herbicide, setHerbicide] = useState(0);
	const [water, setWater] = useState(0);
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
	}, [herbicide, water, capacity, volumeTotal, dilutionFactorNumber]);

	console.log(dilutionFactor);

	return (
		<div className="min-h-screen grid">
			<header className="row-span-1 h-10 p-2 self-start w-full text-center font-semibold">
				<a
					className="transition hover:opacity-80"
					href="https://ljtech.ca"
					target="_blank"
					rel="noreferrer"
				>
					<img className="inline-flex" src={Green} width="15" alt="logo" />{" "}
					ljtech
				</a>
			</header>
			<main className="row-span-6">
				<section>
					<fieldset>
						<legend className="text-center text-3xl font-black px-2 py-4 md:text-4xl lg:px-8 lg:py-16 lg:text-6xl">
							🧪 Herbicide Dilution Calculator
						</legend>
						<div className="flex flex-wrap content-center items-center justify-center">
							<div className="border rounded-sm p-2 m-2 md:mx-8">
								{!capacity && (
									<em className="text-yellow-500 block">
										Please specify an Equipment Capacity in liters (L)
									</em>
								)}
								{!herbicide && (
									<em className="text-green-500 block">
										Please specify your chosen herbicides liters per hectare
										(L/ha)
									</em>
								)}
								{!water && (
									<em className="text-blue-500 block">
										Please specify the required water in liters per hectare
										(L/ha)
									</em>
								)}
								<div className="py-3">
									<ul>
										<li className="px-2 py-4">
											<h2 className="font-bold text-xl">Step 1:</h2>
											<p>
												Herbicide instructions will specify a minimum and
												maximum herbicide and water per area.
												<hr className="my-2" />
												<em className="text-sm font-semibold">
													For example:
													<br />
													min. of 5L/ha to a max. of 10L/ha of herbicide <br />
													mixed with <br />
													min. of 50L/ha to a max. of 100L/ha of water
												</em>
												<hr className="my-2" />
												Enter these values as well as your chosen sprayers
												current capacity into the inputs fields provided.
											</p>
											<div className="m-2 md:mx-8">
												<div className="text-xl py-3">
													<label htmlFor="capacity">
														{capacity ? (
															<p className="block px-2">
																📦 Equipment Capacity(L)
															</p>
														) : (
															<p className="text-yellow-500 block px-2">
																📦 Equipment Capacity(L) *
															</p>
														)}
														<input
															name="capacity"
															id="capacity"
															type="number"
															className="text-black font-semibold px-2 py-1 w-full"
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
												<div className="text-xl py-3">
													<label htmlFor="herbicide">
														{herbicide ? (
															<p className="block px-2">
																☠ Herbicide per unit of area(L/ha)
															</p>
														) : (
															<p className="text-green-500 block px-2">
																☠ Herbicide per unit of area(L/ha)*
															</p>
														)}
														<input
															name="herbicide"
															id="herbicide"
															type="number"
															className="text-black font-semibold px-2 py-1 w-full"
															min="1"
															placeholder={herbicide}
															max="500"
															onChange={(e) => setHerbicide(e.target.value)}
														/>
														<small className="block px-2 text-gray-400">
															Current value specified: {herbicide}L/ha
														</small>
													</label>
												</div>
												<div className="text-xl py-3">
													<label htmlFor="water">
														{water ? (
															<p className="block px-2">
																💧 Water per unit of area(L/ha)
															</p>
														) : (
															<p className="text-blue-500 block px-2">
																💧 Water per unit of area(L/ha)*
															</p>
														)}
														<input
															name="water"
															id="water"
															type="number"
															className="text-black font-semibold px-2 py-1 w-full"
															min="1"
															placeholder={water}
															max="500"
															onChange={(e) => setWater(e.target.value)}
														/>
														<small className="block px-2 text-gray-400">
															Current value specified: {water}L/ha
														</small>
													</label>
												</div>
											</div>
										</li>
										<li className="px-2 py-4">
											<h2 className="font-bold text-xl">Step 2:</h2>
											<p>
												With the above values entered this calculator will find
												your dilution factor:
											</p>
											<h3 className="font-bold px-2 py-4">
												YOUR DILUTION FACTOR IS:{" "}
												<span className="text-black">{dilutionFactor}</span>
											</h3>
										</li>
										<li className="px-2 py-4">
											<h2 className="font-bold text-xl">Step 3:</h2>
											<p>
												Add{" "}
												<strong>
													{Number(herbicideRequired.toFixed(2))}L of herbicide
												</strong>{" "}
												to your <strong>{capacity}L container</strong>.
											</p>
										</li>
										<li className="px-2 py-4">
											<h2 className="font-bold text-xl">Step 4:</h2>
											<p>
												Fill up rest of your{" "}
												<strong>{capacity}L container</strong> with{" "}
												<strong>
													{Number((capacity - herbicideRequired).toFixed(2))}L
													of water
												</strong>
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</fieldset>
				</section>
			</main>
			<footer className="row-span-1 h-10 p-2 self-end w-full text-center font-semibold">
				©{new Date().getFullYear()}
			</footer>
		</div>
	);
}
