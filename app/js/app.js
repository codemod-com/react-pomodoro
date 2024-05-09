import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDom from 'react-dom';
import Pomodoro from './../components/Pomodoro/Pomodoro';

const root = createRoot(document.getElementById('app'));
root.render(<Pomodoro />);
