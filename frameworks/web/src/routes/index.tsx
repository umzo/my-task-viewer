import React from 'react';
import { useRoutes} from "react-router-dom";
import Home from"~/pages/home"
import Page1 from"~/pages/page1"
import Page2 from"~/pages/page2"

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '/', element: <Home /> },
    { path: '/page1/', element: <Page1 /> },
    { path: '/page2/', element: <Page2 /> },

  ];
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>
}