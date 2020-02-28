import * as React from 'react';
import { RenderResult } from '@testing-library/react';

export interface TestRouterProps {
  children?: React.ReactNode;
  location: string;
}

export interface RenderWithRouterOptions {
  location?: string;
}

export interface RenderWithRouter extends RenderResult {
  location: string;
}
