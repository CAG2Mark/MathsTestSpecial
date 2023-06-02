const AnswerType = {
    FUNCTION: 0,
    NUMBER: 1,
    EXACT: 2
}

// after question p, q, r, etc
var cp_pos = [];

const ANS_HASH = "1e9010bf09812dad5c8f2b62eaaa2c5d10aa36ac8e808836a81aabfec13f7569";
const CHECKPOINT_HASHES = [];

var questionsData = [
    {
        id: "tut1",
        prompt: `(Tutorial #1) For some questions, you will have to answer
        with an answer that is a number. For example, 
        if the answer is \\(\\frac{\\pi+e}{2}\\), then <span class="mono">(pi+e)/2</span>, 
        <span class="mono">0.5(pi+e)</span>, <span class="mono">2(pi+e)/(3+1)</span> etc. 
        will all be accepted. However, your answers will be checked to a higher precision
        than most calculators, so <b>do not enter approximate numbers as your answer</b>. 
        Try entering the answer below.`,
        answerType: AnswerType.NUMBER,
        signatureTests: null,
        isTutorial: true,
        tutorialAnswer: "(pi+e)/2"
    },
    {
        id: "tut2",
        prompt: `(Tutorial #2) You can also have simple functions as part of your numerical
        answers if you wish. For example, if the answer is \\(\\sqrt{\\binom{5}{3} e^{\\sin \\ln 2}}\\),
        you may enter <span class="mono">sqrt(nCr(5,3) e^sin(ln(2)))</span>. Other available functions
        include <span class="mono">floor(x), cos(x), arcsin(x)</span> and more. 
        The input and output to all relevant functions are in radians.`,
        answerType: AnswerType.NUMBER,
        signatureTests: null,
        isTutorial: true,
        tutorialAnswer: "sqrt(nCr(5,3) e^sin(ln(2)))"
    },
    {
        id: "tut3",
        prompt: `(Tutorial #3) For some questions, you may be asked to enter
        a function or expression. For example, if the question is asking for the product of
        \\(|xy-x|\\) and \\(|xy+x|\\), you could type <span class="mono">abs((x*y)^2 - x^2)</span> or
        <span class="mono">abs(x*y-x) * abs(x*y+x)</span>. All of these will be correct.`,
        answerType: AnswerType.FUNCTION,
        signatureTests: [{ "x": 1, "y": 1 }, { "x": -100, "y": 2 }, { "x": 2, "y": 0.51234 }, { "x": 4.5123, "y": 1 }, { "x": 7, "y": 0 }, { "x": 100, "y": 2 }, { "x": 0, "y": 0 }],
        isTutorial: true,
        tutorialAnswer: "abs((x*y)^2 - x^2)",
    },
    {
        id: "welcome",
        prompt: `What is \\(10 + 10\\)?`,
        answerType: AnswerType.NUMBER,
        signatureTests: null,
        isTutorial: false,
    },
    {
        id: "sum",
        prompt: `How many different ways are there to sum to \\(20\\) using only positive integers? The order of the summands matter.<br><br>

        As a simpler example, all the ways to sum to \\(4\\) are \\(4\\), \\(1 + 3\\), \\(2 + 2\\), \\(3 + 1\\), \\(1 + 1 + 2\\), \\(1 + 2 + 1\\), \\(2 + 1 + 1\\), and \\(1 + 1 + 1 + 1\\).`,
        answerType: AnswerType.NUMBER,
        signatureTests: null,
        isTutorial: false
    },
    {
        id: "integral",
        prompt: `Let \\(f(x) = 40\\sin(x - c)\\) (we use radians). Let \\(u(x)\\) be the unit step function, i.e.:
        \\[
         u(x) = \\begin{cases}
                 1 & x \\geq 0\\\\
                 0 & x < 0
                \\end{cases}
        \\]
        Find the smallest <i>positive</i> value of \\(c\\) such that:
        \\[
         \\int^{20}_{-20} f(x) \\, d u(x) = 20 
        \\]
        Hint: Think very carefully what integration with respect to a function means. Intuitively, when integrating with respect to \\(x\\) (i.e. \\(dx\\) is in the integral), each infinitesimal "slice" is weighted equally, as the (unit) change of \\(x\\) is constant. What kind of change do we have when we integrate with respect to the unit step function?`,
        answerType: AnswerType.NUMBER,
        signatureTests: null,
        isTutorial: false,
    },
    {
        id: "melody",
        prompt: `Suppose a melody contains \\(20\\) notes and CAG wants to play it on the piano. Assume the melody contains a single sequence of notes, i.e. no chords.<br><br>

        The probability that he plays a certain note correctly is \\(p\\) if the previous note was played correctly, and \\(q\\) if the previous note was played incorrectly. The first note is always played correctly.<br><br>
        
        What is the probability that he plays the final note correctly? (You may assume \\(p+q\\neq1\\)).`,
        answerType: AnswerType.FUNCTION,
        signatureTests: [{"q": 0.6, "p": 0.5}, {"q": 0.1, "p": 0.5}, {"q": 0.9, "p": 0.4}, {"q": 0, "p": 0}, {"q": 1, "p": 1}],
        isTutorial: false
    }
];