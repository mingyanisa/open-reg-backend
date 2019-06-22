# **(Relational)** Organization

## `organization`

| Column Name | Type | #   |
| ----------- | ---- | --- |
| id          | int  | -   |
| name        | text | -   |
| description | text | -   |

## `organization_member`

| Column Name     | Type   | #                       |
| --------------- | ------ | ----------------------- |
| id              | int    | -                       |
| user_id         | String | **(Object)** `User._id` |
| organization_id | int    | `organization.id`       |
| role            | enum   | OWNER, COMMITEE, MEMBER |
