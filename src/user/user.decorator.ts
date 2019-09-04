import { createParamDecorator } from '@nestjs/common';

export const UserId = createParamDecorator(
    (data, req): string => {
        return req.user;
    },
);
