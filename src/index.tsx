import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaCalendar } from 'react-icons/fa';
import { AppDatePicker, AppDateRangePicker } from 'awesome-date-picker';
import {  Center, ChakraProvider, HStack, Heading, Text, VStack } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <HStack justifyContent='center' pt={10}><Heading color='#555'>Awesome date picker</Heading></HStack>
    <Center h='70vh' w='full' >
        <HStack gap={200}>
          <VStack gap={5} bg='#A1A1A1' p={10} borderRadius={5}>
            <Text color='#fff'>Date picker</Text>
              <AppDatePicker
                onDateSelect={(date: Date) => alert(date)}
                icon={<FaCalendar size={50} />}
                prePos={{ x: 0, y: 0 }}
              />
          </VStack>
          <VStack gap={5} bg='#A1A1A1' p={10} borderRadius={5}>
            <Text color='#fff'>Date range picker</Text>
            <AppDateRangePicker
              id={1}
              onRangeSelect={(date1: Date, date2: Date) => console.log(date1, date2)}
              icon={<FaCalendar size={50} />}
              prePos={{ x: 0, y: 0 }}
            />
          </VStack>
        </HStack>
    </Center>
    </ChakraProvider>

  </React.StrictMode>
);
