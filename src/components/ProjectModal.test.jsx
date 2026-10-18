import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "./ProjectCard";

const project = {
  id: 1,
  title: "Gallery project",
  description: "The complete project description.",
  img: "/first.png",
  hoverImg: "/second.png",
  tags: [{ name: "React" }],
  Link: "https://example.com",
};

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); };
});

test("opens project details and cycles gallery photos with buttons and keyboard", () => {
  render(<ProjectCard project={project} />);
  fireEvent.click(screen.getByRole("button", { name: /View Gallery project/ }));
  const dialog = screen.getByRole("dialog");
  expect(dialog).toHaveTextContent(project.description);
  expect(screen.getByRole("link", { name: /Visit live site/ })).toHaveAttribute("href", project.Link);
  expect(screen.getByRole("img", { name: /screenshot 1/ })).toHaveAttribute("src", project.img);
  fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
  expect(screen.getByRole("img", { name: /screenshot 2/ })).toHaveAttribute("src", project.hoverImg);
  fireEvent.keyDown(dialog, { key: "ArrowRight" });
  expect(screen.getByRole("img", { name: /screenshot 1/ })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Show photo 2" }));
  expect(screen.getByRole("button", { name: "Show photo 2" })).toHaveAttribute("aria-pressed", "true");
});

test("closes, restores focus and scrolling, and resets the gallery on reopen", () => {
  render(<ProjectCard project={project} />);
  const trigger = screen.getByRole("button", { name: /View Gallery project/ });
  trigger.focus();
  fireEvent.click(trigger);
  expect(document.body.style.overflow).toBe("hidden");
  fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
  fireEvent.click(screen.getByRole("button", { name: "Close project details" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe("");
  expect(trigger).toHaveFocus();
  fireEvent.click(trigger);
  expect(screen.getByRole("img", { name: /screenshot 1/ })).toBeInTheDocument();
  fireEvent(screen.getByRole("dialog"), new Event("cancel", { bubbles: false, cancelable: true }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("loads video only when selected and removes the player when navigating away", () => {
  render(<ProjectCard project={{ ...project, videos: ["/coffee-demo.mp4"] }} />);
  fireEvent.click(screen.getByRole("button", { name: /View Gallery project/ }));
  expect(screen.queryByLabelText("Gallery project demo video")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Show video 3" }));
  const video = screen.getByLabelText("Gallery project demo video");
  expect(video).toHaveAttribute("src", "/coffee-demo.mp4");
  expect(video).toHaveAttribute("controls");
  expect(video).toHaveAttribute("preload", "none");
  fireEvent.keyDown(video, { key: "ArrowRight" });
  expect(video).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Previous item" }));
  expect(screen.queryByLabelText("Gallery project demo video")).not.toBeInTheDocument();
});

test("handles a single photo without redundant navigation", () => {
  render(<ProjectCard project={{ ...project, hoverImg: project.img }} />);
  fireEvent.click(screen.getByRole("button", { name: /View Gallery project/ }));
  expect(screen.getByText("Photo 1 of 1")).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Next photo" })).not.toBeInTheDocument();
});
