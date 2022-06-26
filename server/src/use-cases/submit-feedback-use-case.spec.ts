import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type:'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,812efmkgkkgfgjk',   
        })) .resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    });

    it ('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute ({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,812efmkgkkgfgjk',
        }))  .rejects.toThrow();
    });

    it ('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute ({
            type: 'BUG',
            comment: 'Bugado',
            screenshot: '123',
        }))  .rejects.toThrow();
    });
});