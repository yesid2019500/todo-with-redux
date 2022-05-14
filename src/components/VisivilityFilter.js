import { Container, Tabs, TabList, Tab } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { VISIVILITY_FILTER } from '../constants'
import { setFilter } from '../redux/actions'

export const VisivilityFilter = () => {

    const dispatch = useDispatch();

  return (
    <Container centerContent>
        <Tabs>
            <TabList>
        {/* estamos recorriendo la info de VISI.. y estamos agregando
            el contenigo en etiquetas tab
        */}
               {Object.keys(VISIVILITY_FILTER).map(filterkey => {
                   const currentFilter = VISIVILITY_FILTER[filterkey]
                //    console.log(currentFilter) tiene el valor de VIS..
                   return (
                       <Tab key={`visivility-filter-${currentFilter}`}
                        onClick={ ()=> dispatch(setFilter(currentFilter)) }
                       >
                           {currentFilter}
                       </Tab>

                   )
               })}
            </TabList>
        </Tabs>
    </Container>
  )
}
