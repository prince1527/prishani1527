export const initialState ={
    user:null,
    playlists: [],
    playing :false,
    item:null,
   // token:'BQCQb3wUDSEejQ1GZAu0tj6dgiAkU-oljbZ6-6JUjqSpR1IwMp3Iz8yKFMQdurSIwfQgrns4fMY5kR3evJupYBLTw-SI-q65IMtcC6nX6xfM7ZkiohAE_uAytdtfsO5xks73FC3jmEwOzEuMmFyiMZt5TqP9Lii5EKG7PmcEeJ1icjkm',
    //emove after coding mandatory
};

const reducer = (state,action) =>{
  console.log(action);

  switch(action.type){
      case 'SET_USER':
          return{
              ...state,
              user: action.user,
          };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };

            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists,
                }
                case 'SET_DISCOVER_WEEKLY':
                    return{
                        ...state,
                        discover_weekly: action.discover_weekly,
                    }
          default:
              return state;
  }
}

export default reducer;