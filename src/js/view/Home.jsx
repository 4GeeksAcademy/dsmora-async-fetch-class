import React from "react";
import Stack from '../component/Stack'
import Async from '../component/Async'
import PromiseJS from '../component/Promise'
import AsyncAwait from '../component/AsyncAwait'
import RestApi from '../component/RestApi'

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <Stack /> */}
			{/* <Async /> */}
			{/* <PromiseJS /> */}
			{/* <AsyncAwait /> */}
			<RestApi />
		</div>
	);
};

export default Home;
