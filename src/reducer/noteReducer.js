export default function(state = {  },action){
  switch(action.type)
  {
    case 'GETNOTES':
      return action.payload;

    default:
      return state;
  }
}
