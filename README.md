# 서-클 합동세미나

# Base URL
ec2-3-39-22-134.ap-northeast-2.compute.amazonaws.com:8001

# API
1. 프로필 조회하기
### [GET] /api/profile/:id
- Request Header
  |||
  |------------|---------------|
  |Content-Type|application/json|
- Request Param
  |필드|데이터 타입|description|
  |------------|---------------|---------------|
  |id|String|프로필 id|

- Response Body
  ```
  {
  "status": 200,
  "success": true,
  "message": "프로필 조회 성공",
  "data": {
    "id": "6290810aafae9f02409bdf47",
    "name": "고길동",
    "intro_message": "저는 UI/UX 디자이너입니다. 하하하ㅏ"
  }
  }
  ```
2. 프로필 수정하기
### [POST] /api/profile/:id
- Request Header
  |||
  |------------|---------------|
  |Content-Type|application/json|
- Request Param
  |필드|데이터 타입|description|
  |------------|---------------|---------------|
  |id|String|프로필 id|
  
- Request Body
  ```
  {
	"name": "고길동",
	"intro_message": "저는 UI/UX 디자이너입니다. 하하하ㅏ 수정수정"
  }
  ```
- Response Body
  ```
  {
  "status": 200,
  "success": true,
  "message": "프로필 수정 성공",
  "data": {
    "id": "6290810aafae9f02409bdf47",
    "name": "고길동",
    "intro_message": "저는 UI/UX 디자이너입니다. 하하하ㅏ 수정수정"
  }
  }
  ```

# 프로젝트 폴더링
```
📦 backend
├─ .gitignore
├─ README.md
├─ nodemon.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ config
│  │  └─ index.ts
│  ├─ controllers
│  │  ├─ index.ts
│  │  └─ profile
│  │     └─ ProfileController.ts
│  ├─ index.ts
│  ├─ interfaces
│  │  └─ user
│  │     ├─ ProfileResponseDto.ts
│  │     ├─ ProfileUpdateDto.ts
│  │     └─ UserInfo.ts
│  ├─ loaders
│  │  └─ db.ts
│  ├─ models
│  │  └─ user
│  │     └─ Users.ts
│  ├─ modules
│  │  ├─ responseMessage.ts
│  │  ├─ statusCode.ts
│  │  └─ util.ts
│  ├─ routes
│  │  ├─ ProfileRouter.ts
│  │  └─ index.ts
│  └─ services
│     ├─ index.ts
│     └─ profile
│        └─ ProfileService.ts
├─ tsconfig.json
└─ yarn.lock
```
