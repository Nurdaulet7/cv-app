export interface Reporter {
	name: string;
	photoUrl: string;
	citeUrl: string;
}

export interface FeedbackEntry {
	feedback: string;
	reporter: Reporter;
}
