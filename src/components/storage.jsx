export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const addMoreData = (key, value) => {
  try {
    const prevData = JSON.parse(localStorage.getItem(key));
    if (prevData) {
      const newData = [...prevData, value];
      const serializedState = JSON.stringify(newData);
      localStorage.setItem(key, serializedState);
    } else {
      const serializedState = JSON.stringify([value]);
      localStorage.setItem(key, serializedState);
    }
    
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
}

export const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export const remove = key => {
  try {
      const serializedState = localStorage.getItem(key);
      if (serializedState !== null) {
          localStorage.removeItem(key);
      }
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};