import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./configureStore";
import routeConfig from "./config/routes";
import Loading from "./views/Loading/Loading";
import "./styles/Main.scss";

const App = () => {
	return (
		<Provider store={store}>
			<Suspense fallback={Loading()}>
				<Router>
					<Switch>
						{routeConfig.map((route, idx) => {
							return route.component ? (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={matchProps => (
										<route.layout {...matchProps}>
											<route.component {...matchProps} routes={route.routes} />
										</route.layout>
									)}
								/>
							) : null;
						})}
					</Switch>
				</Router>
			</Suspense>
		</Provider>
	);
};

export default App;
