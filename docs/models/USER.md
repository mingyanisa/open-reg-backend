# **(Object)** User

```typescript
interface User {
    id?: String = null
    name_th: Name
    name_en: Name
    contact: Contact
    health: Health
    studentInfo: StudentInfo
}
```

```typescript
interface Name {
    firstName: String
    lastName: String
    nickName: String
}
```

```typescript
interface Contact {
    phone: String
    emergency: String
    email: String
    address: String
    facebook: String
    line: String
}
```

```typescript
interface Health {
    weight: Int
    height: Int
    bloodType: BLOODTYPE
}
```

```typescript
enum BLOODTYPE {
    A,
    B,
    AB,
    O
}
```
