const greet = (name?: string): string => `Hello ${!name ? 'world' : name}`;

export default greet;
