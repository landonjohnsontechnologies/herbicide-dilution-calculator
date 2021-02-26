const Docs = () => (
	<div className="px-2 py-10">
		<h1 className="text-center text-xl font-black py-4">How does this calculation work?</h1>
		<div className="py-10">
			<h2 className="text-sm font-black">variables:</h2>
			<ul className="text-xs font-semibold">
				<li>
					<span className="text-blue-500">dilutionFactor</span>: proportions of
					herbicide and water that should be in the mixture
				</li>
				<li>
					<span className="text-blue-500">herbicideRequired</span>: amount of
					herbicide to add to spraying equipment
				</li>
				<hr className="my-1" />
				<li>
					<span className="text-blue-500">capacity(L)</span>: volume of the
					spraying equipment
				</li>
				<li>
					<span className="text-blue-500">herbicide(units)</span>: suggested
					amount of herbicide per unit area
				</li>
				<li>
					<span className="text-blue-500">water(units)</span>: suggested amount
					of water per unit area
				</li>
				<li>
					<span className="text-blue-500">unit</span>: Litres (L)
				</li>
				<li>
					<span className="text-blue-500">units</span>: Litres per acre (L/ac),
					litres per hectare (L/ha)
				</li>
			</ul>
		</div>
		<div className="py-10">
			<h2 className="text-sm font-black">formulas:</h2>
			<div className="text-xs font-semibold">
				<span className="text-blue-500">dilutionFactor</span> ={" "}
				<span className="text-blue-500">herbicide</span> \ (
				<span className="text-blue-500">herbicide</span> +{" "}
				<span className="text-blue-500">water</span>)
			</div>
			<div className="text-xs font-semibold">
				<span className="text-blue-500">herbicideRequired</span> ={" "}
				<span className="text-blue-500">capacity</span> *{" "}
				<span className="text-blue-500">dilutionFactor</span>
			</div>
		</div>
		<div className="py-10">
			<h2 className="text-sm font-black">examples:</h2>
			<div className="text-xs py-2.5">
				<h3 className="text-sm font-bold">variables:</h3>
				<ul className="font-semibold">
					<li>
						<span className="text-blue-500">dilutionFactor</span>:{" "}
						<span className="text-yellow-500">x</span>
					</li>
					<li>
						<span className="text-blue-500">herbicideRequired</span>:{" "}
						<span className="text-yellow-500">y</span>
					</li>
					<hr className="my-1" />
					<li>
						<span className="text-blue-500">capacity</span>:{" "}
						<span className="text-gray-400">10L</span>
					</li>
					<li>
						<span className="text-blue-500">herbicide</span>:{" "}
						<span className="text-gray-400">7L/ha</span>
					</li>
					<li>
						<span className="text-blue-500">water</span>:{" "}
						<span className="text-gray-400">50L/ha</span>
					</li>
					<li>
						<span className="text-blue-500">units</span>:{" "}
						<span className="text-gray-400">L/ha</span>
					</li>
				</ul>
			</div>
			<div className="py-2.5">
				<h3 className="text-sm font-bold">formulas:</h3>
				<div className="text-xs font-semibold">
					<span className="text-blue-500">dilutionFactor</span> ={" "}
					<span className="text-gray-400">7L/ha</span> \ (
					<span className="text-gray-400">7L/ha</span> +{" "}
					<span className="text-gray-400">50L/ha</span>)
				</div>
				<div className="text-xs font-semibold">
					<span className="text-blue-500">herbicideRequired</span> ={" "}
					<span className="text-gray-400">10L</span> *{" "}
					<span className="text-gray-400">7/57L</span>
				</div>
			</div>
		</div>
	</div>
);

export default Docs;
