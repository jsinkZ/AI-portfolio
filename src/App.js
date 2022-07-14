import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<div className="content-wrapper">
				<Routes>
					<Route path="/*" element={<Main />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
