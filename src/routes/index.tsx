import { routesPath } from "../constants/common";
import {
  MainPage,
  HomePage,
  SignInPage,
  CreateProjectPage,
  ProjectDetailsPage,
  CreateRecommendationPage,
} from "../pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routesPath.DEFAULT} element={<MainPage />}>
      <Route path={routesPath.SIGNIN} element={<SignInPage />} />
      <Route path={routesPath.HOME} element={<HomePage />} />
      <Route path={routesPath.CREATE_PROJECT} element={<CreateProjectPage />} />
      <Route
        path={routesPath.PROJECT_DETAILS}
        element={<ProjectDetailsPage />}
      />
      <Route
        path={routesPath.CREATE_RECOMMENDATION}
        element={<CreateRecommendationPage />}
      />
    </Route>
  )
);
