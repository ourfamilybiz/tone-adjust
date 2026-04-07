// File: src/lib/toneProfile.ts

export type ContentSourceType =
  | "original"
  | "edited"
  | "inspired"
  | "copied";

export type VoiceMode =
  | "light"
  | "polish"
  | "enhance"
  | "rewrite";

export type ConflictStyle =
  | "direct"
  | "diplomatic"
  | "avoidant"
  | "analytical";

export type ToneProfile = {
  directness: number;
  formality: number;
  emotionalIntensity: number;
  expressiveness: number;
  structurePreference: number;
  slangUsage: number;
  confidenceLevel: number;
  conflictStyle: ConflictStyle;
  favoritePhrase: string;
};

export const TONE_PROFILE_STORAGE_KEY = "sayitbetter-tone-profile-v1";

export const defaultToneProfile: ToneProfile = {
  directness: 55,
  formality: 60,
  emotionalIntensity: 45,
  expressiveness: 50,
  structurePreference: 55,
  slangUsage: 15,
  confidenceLevel: 55,
  conflictStyle: "diplomatic",
  favoritePhrase: "",
};

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function loadToneProfile(): ToneProfile {
  if (typeof window === "undefined") {
    return defaultToneProfile;
  }

  try {
    const raw = window.localStorage.getItem(TONE_PROFILE_STORAGE_KEY);

    if (!raw) {
      return defaultToneProfile;
    }

    const parsed = JSON.parse(raw) as Partial<ToneProfile>;

    return {
      directness: clampScore(parsed.directness ?? defaultToneProfile.directness),
      formality: clampScore(parsed.formality ?? defaultToneProfile.formality),
      emotionalIntensity: clampScore(
        parsed.emotionalIntensity ?? defaultToneProfile.emotionalIntensity
      ),
      expressiveness: clampScore(
        parsed.expressiveness ?? defaultToneProfile.expressiveness
      ),
      structurePreference: clampScore(
        parsed.structurePreference ?? defaultToneProfile.structurePreference
      ),
      slangUsage: clampScore(parsed.slangUsage ?? defaultToneProfile.slangUsage),
      confidenceLevel: clampScore(
        parsed.confidenceLevel ?? defaultToneProfile.confidenceLevel
      ),
      conflictStyle: parsed.conflictStyle ?? defaultToneProfile.conflictStyle,
      favoritePhrase: parsed.favoritePhrase ?? defaultToneProfile.favoritePhrase,
    };
  } catch {
    return defaultToneProfile;
  }
}

export function saveToneProfile(profile: ToneProfile) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TONE_PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

export function resetToneProfile() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(TONE_PROFILE_STORAGE_KEY);
}