# Hash Table

Hash는 암호화 기법입니다. 값을 전달하면 특정한 길이의 새로운 값을 반환합니다. 단방향이기 때문에 매핑된 값으로 이전의 값을 얻지 못합니다.
이러한 Hash는 배열의 인덱스를 빠르게 찾고 저장할 수 있습니다.

하지만 이를 처리하는 해시 함수는 입력값이 달라도 중복된 값을 반환 할 수 있습니다. 이러한 상황을 conflict 라고 합니다.

충돌을 해결하는 대표적인 방법

- chaining : 해당 인덱스에 linked list를 사용
- open addressing: 비어있는 인덱스 배열에 추가

### 구현

해시 함수는 문자열 키값을 받습니다. 각 자리의 유니코드 값을 더하고 저장소의 크기만큼 나눈 나머지 값을 반환합니다.

1. Add

   - key 값을 받아 해싱하여 인덱스를 얻습니다.
   - 배열의 해당 인덱스가 할당되어 있지 않다면 [key, value]를 저장합니다.
   - 해당 인덱스의 순회하여 동일한 키값이 있다면 value를 교체합니다.
   - 동일한 키값이 없다면 [key, value]를 추가합니다.

2. Remove

   - key 값을 받아 해싱하여 인덱스를 얻습니다.
   - 인덱스 위치에 하나의 배열만 존재하고 동일한 키값이 있다면 해당 인덱스를 삭제합니다.
   - 인덱스를 순회하여 동일한 키값이 있다면 동일한 배열만 삭제합니다.

3. Lookup
   - key 값을 받아 해싱하여 인덱스를 얻습니다.
   - 인덱스를 순회하여 동일한 키값이 있다면 value를 반환합니다.
