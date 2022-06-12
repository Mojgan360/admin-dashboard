import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import styled from 'styled-components'
import './App.css'
import { Navbar, Sidbar } from './layouts'

import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Calendar,
  ColorPicker,
  Editor,
  Kanban,
  Area,
  ColorMapping,
  Bar,
  Stacked,
  Pyramid,
  Line,
  Pie,
  Financial,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Sidbar />
      <Container>
        <Wrapper>
          <TooltipComponent position='Top' content='Settings '>
            <Button type='button'>
              <FiSettings />
            </Button>
          </TooltipComponent>
        </Wrapper>
        <div>
          <Routes>
            {/* dashboard  */}
            <Route path='/' element={<Ecommerce />} />
            <Route path='/ecommerce' element={<Ecommerce />} />

            {/* pages  */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />

            {/* apps  */}
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/color-picker' element={<ColorPicker />} />

            {/* charts  */}
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
  margin: 0;
  min-height: 100vh;
  position: relative;
`
const Wrapper = styled.div`
  z-index: 1000;
  position: absolute;
  right: 20px;
  bottom: 20px;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: blue;
  padding: 8px;
  &:hover {
    background-color: blue;
    color: #fff;
    border-radius: 50%;
  }
`

export default App
