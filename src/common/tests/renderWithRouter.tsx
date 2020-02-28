import * as React from 'react';
import { StaticRouter } from 'react-router';
import { render } from '@testing-library/react';
import { RenderWithRouter, RenderWithRouterOptions, TestRouterProps } from '../types';

export const TestRouter: React.FC<TestRouterProps> = ({ children, location }) => (
  <StaticRouter location={location}>{children}</StaticRouter>
);

export const renderWithRouter = (
  comp: React.ReactNode,
  { location = '/' }: RenderWithRouterOptions = {}
): RenderWithRouter => {
  return {
    ...render(<TestRouter location={location}>{comp}</TestRouter>),
    location,
  };
};
