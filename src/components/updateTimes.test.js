import { updateTimes } from './Main.js'; 
import jest from 'jest-mock'; // this is needed to create a mock function for fetchAPI
describe('updateTimes', () => {
    test('should update state with selected date and available times', () => {
      // Arrange
      const state = {
        selectedDate: null,
        availableTimes: null
      };
      const action = {
        type: 'UPDATE_TIMES',
        selectedDate: '2023-02-22'
      };
      const expectedAvailableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
      // Mock or stub out fetchAPI to return expectedAvailableTimes
      const mockFetchAPI = jest.fn(() => expectedAvailableTimes);
      
      // Act
      const newState = updateTimes(state, action, mockFetchAPI);
      
      // Assert
      expect(mockFetchAPI).toHaveBeenCalledWith(new Date('2023-02-22'));
      expect(newState.selectedDate).toEqual('2023-02-22');
      expect(newState.availableTimes).toEqual(expectedAvailableTimes);
    });
  
    test('should return the same state for unknown action types', () => {
      // Arrange
      const state = { selectedDate: null, availableTimes: null };
      const action = { type: 'UNKNOWN_ACTION_TYPE' };
  
      // Act
      const newState = updateTimes(state, action);
  
      // Assert
      expect(newState).toEqual(state);
    });
  });
  