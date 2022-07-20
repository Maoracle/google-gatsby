const initValue = [
  {
    "name": "百度一下，你就知道",
    "url": "https://www.baidu.com/"
  },
  {
    "name": "斗鱼",
    "url": "https://www.douyu.com/"
  },
  {
    "name": "拉勾",
    "url": "https://kaiwu.lagou.com/"
  }
]

export default function shortcutReducer (state = initValue, action) {
  switch (action.type) {
    case "addShortcut": 
      return [...state, action.payload]
      
    case "saveShortcut": 
      return [...state, action.payload]

    case "deleteShortcut":
      return [...state.filter(item => item.name !== action.payload.name)];
    
      case "editShortCut":
      return [...state.map(item => {
        if (item.title === action.payload.editType) {
          return {
            name: action.payload.name,
            url: action.payload.url,
            imgUrl: action.payload.imgUrl,
          }
        }
        return item
      })]

    default: 
      return state
  }
}