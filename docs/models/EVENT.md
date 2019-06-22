# **(Relational)** Event

## `event`

| Column Name     | Type     | #                 |
| --------------- | -------- | ----------------- |
| id              | int      | -                 |
| organization_id | int      | `organization.id` |
| name            | text     | -                 |
| date            | datetime | -                 |
| location        | text     | -                 |
| public          | boolean  | -                 |

## `event_user`

| Column Name | Type    | #                   |
| ----------- | ------- | ------------------- |
| id          | int     | -                   |
| user_id     | int     | `(Object) User._id` |
| event_id    | int     | `event.id`          |
| attended    | boolean | -                   |
