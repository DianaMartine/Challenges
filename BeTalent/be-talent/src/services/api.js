const baseUrl = 'http://localhost:3001';

const getEmployees = async () => {
    const response = await fetch(`${baseUrl}/employees`);
    const data = await response.json();
    return data;
}

export default getEmployees;