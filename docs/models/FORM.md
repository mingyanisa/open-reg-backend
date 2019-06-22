# **(Relational)** Form

## `form`

| Column Name | Type | #          |
| ----------- | ---- | ---------- |
| id          | int  | -          |
| event_id    | int  | `event.id` |
| title       | text | -          |
| description | text | -          |

## `form_question`

| Column Name | Type | #                                                  |
| ----------- | ---- | -------------------------------------------------- |
| id          | int  | -                                                  |
| form_id     | int  | `form.id`                                          |
| type        | enum | SHORT_ANSWER, MULTIPLE_CHOICE,CHECKBOXES, DROPDOWN |
| order       | int  | -                                                  |
| question    | text | -                                                  |
| answer      | json | -                                                  |

## `form_response`

| Column Name | Type   | #                       |
| ----------- | ------ | ----------------------- |
| id          | int    | -                       |
| user_id     | String | **(Object)** `User._id` |
| form_id     | int    | `form.id`               |

## `form_response_answer`

| Column Name      | Type | #                  |
| ---------------- | ---- | ------------------ |
| id               | int  | -                  |
| form_response_id | int  | `form_response.id` |
| order            | int  | -                  |
| answer           | json | -                  |
