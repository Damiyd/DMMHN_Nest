import { IsNotEmpty, IsString } from "class-validator";

export class CreateMockInterviewDto {
    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsNotEmpty()
    question: string;

    @IsString()
    @IsNotEmpty()
    customMemberEmail: string;
}
