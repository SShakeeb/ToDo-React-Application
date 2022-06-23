import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import ListView from './ListView';
const test_data =[
    {
      "id": 1,
      "name": "first",
      "description": "first text",
      "status": "done"
    },
    {
      "id": 2,
      "name": "second",
      "description": "second text",
      "status": "pending"
    },
    {
      "id": 3,
      "name": "three",
      "description": "three text",
      "status": "done"
    },
    {
      "id": 4,
      "name": "four",
      "description": "four text",
      "status": "pending"
    },
    {
      "id": 5,
      "name": "five",
      "description": "five text",
      "status": "done"
    },
    {
      "id": 6,
      "name": "six",
      "description": "six text",
      "status": "pending"
    },
    {
      "id": 7,
      "name": "seven",
      "description": "seven text",
      "status": "done"
    },
    {
      "id": 8,
      "name": "eight",
      "description": "eight text",
      "status": "pending"
    },
    {
      "id": 9,
      "name": "nine",
      "description": "nine text",
      "status": "done"
    },
    {
      "id": 10,
      "name": "ten",
      "description": "ten text",
      "status": "pending"
    }
  ];
describe("ListView", () => {
    let testComponent: ReactElement;
    beforeEach(() => {
      testComponent = (
        <ListView
            data={test_data}
        />
      );
    });

    it("should render ListView Component", async () => {
        render(testComponent);
        screen.getByText("id");
        screen.getByText("name");
        screen.getByText("description");
        screen.getByText("status");
        screen.getByText("1");
        screen.getByText("first");
        screen.getByText("first text");
    });
    //Note: I will add behavior test cases later  
});
