import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {} },
    { sendMail: async () => {} }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type:'',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,812efmkgkkgfgjk',   
        })) .rejects.toThrow();
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