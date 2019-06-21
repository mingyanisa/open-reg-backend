# **(Relational)** Organization

## `organization`

| Column Name | Type | #   |
| ----------- | ---- | --- |
| id          | int  | -   |
| name        | text | -   |
| description | text | -   |

## `organization_member`

| Column Name  | Type | #                             |
| ------------ | ---- | ----------------------------- |
| id           | int  | -                             |
| user         | int  | `(Object) User._id`           |
| organization | int  | `organization.id`             |
| role         | enum | `OWNER`, `COMMITEE`, `MEMBER` |
