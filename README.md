# 합동 세미나 과제 제출: 박진형
## 배포 주소
* 배포 주소: [54.180.27.106:8003](54.180.27.106:8003)

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
